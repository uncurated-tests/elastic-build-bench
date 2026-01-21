'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14567<T> = T extends (infer U)[]
  ? DeepReadonlyArray14567<U>
  : T extends object
  ? DeepReadonlyObject14567<T>
  : T;

interface DeepReadonlyArray14567<T> extends ReadonlyArray<DeepReadonly14567<T>> {}

type DeepReadonlyObject14567<T> = {
  readonly [P in keyof T]: DeepReadonly14567<T[P]>;
};

type UnionToIntersection14567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14567<T> = UnionToIntersection14567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14567<T extends unknown[], V> = [...T, V];

type TuplifyUnion14567<T, L = LastOf14567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14567<TuplifyUnion14567<Exclude<T, L>>, L>;

type DeepPartial14567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14567<T[P]> }
  : T;

type Paths14567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14567<K, Paths14567<T[K], Prev14567[D]>> : never }[keyof T]
  : never;

type Prev14567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14567 {
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

type ConfigPaths14567 = Paths14567<NestedConfig14567>;

interface HeavyProps14567 {
  config: DeepPartial14567<NestedConfig14567>;
  path?: ConfigPaths14567;
}

const HeavyComponent14567 = memo(function HeavyComponent14567({ config }: HeavyProps14567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14567.displayName = 'HeavyComponent14567';
export default HeavyComponent14567;
