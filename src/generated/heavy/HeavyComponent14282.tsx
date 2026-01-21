'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14282<T> = T extends (infer U)[]
  ? DeepReadonlyArray14282<U>
  : T extends object
  ? DeepReadonlyObject14282<T>
  : T;

interface DeepReadonlyArray14282<T> extends ReadonlyArray<DeepReadonly14282<T>> {}

type DeepReadonlyObject14282<T> = {
  readonly [P in keyof T]: DeepReadonly14282<T[P]>;
};

type UnionToIntersection14282<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14282<T> = UnionToIntersection14282<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14282<T extends unknown[], V> = [...T, V];

type TuplifyUnion14282<T, L = LastOf14282<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14282<TuplifyUnion14282<Exclude<T, L>>, L>;

type DeepPartial14282<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14282<T[P]> }
  : T;

type Paths14282<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14282<K, Paths14282<T[K], Prev14282[D]>> : never }[keyof T]
  : never;

type Prev14282 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14282<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14282 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths14282 = Paths14282<NestedConfig14282>;

interface HeavyProps14282 {
  config: DeepPartial14282<NestedConfig14282>;
  path?: ConfigPaths14282;
}

const HeavyComponent14282 = memo(function HeavyComponent14282({ config }: HeavyProps14282) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14282) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14282 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14282: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14282.displayName = 'HeavyComponent14282';
export default HeavyComponent14282;
