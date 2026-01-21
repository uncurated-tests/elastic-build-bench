'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14706<T> = T extends (infer U)[]
  ? DeepReadonlyArray14706<U>
  : T extends object
  ? DeepReadonlyObject14706<T>
  : T;

interface DeepReadonlyArray14706<T> extends ReadonlyArray<DeepReadonly14706<T>> {}

type DeepReadonlyObject14706<T> = {
  readonly [P in keyof T]: DeepReadonly14706<T[P]>;
};

type UnionToIntersection14706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14706<T> = UnionToIntersection14706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14706<T extends unknown[], V> = [...T, V];

type TuplifyUnion14706<T, L = LastOf14706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14706<TuplifyUnion14706<Exclude<T, L>>, L>;

type DeepPartial14706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14706<T[P]> }
  : T;

type Paths14706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14706<K, Paths14706<T[K], Prev14706[D]>> : never }[keyof T]
  : never;

type Prev14706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14706 {
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

type ConfigPaths14706 = Paths14706<NestedConfig14706>;

interface HeavyProps14706 {
  config: DeepPartial14706<NestedConfig14706>;
  path?: ConfigPaths14706;
}

const HeavyComponent14706 = memo(function HeavyComponent14706({ config }: HeavyProps14706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14706.displayName = 'HeavyComponent14706';
export default HeavyComponent14706;
