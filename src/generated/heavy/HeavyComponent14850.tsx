'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14850<T> = T extends (infer U)[]
  ? DeepReadonlyArray14850<U>
  : T extends object
  ? DeepReadonlyObject14850<T>
  : T;

interface DeepReadonlyArray14850<T> extends ReadonlyArray<DeepReadonly14850<T>> {}

type DeepReadonlyObject14850<T> = {
  readonly [P in keyof T]: DeepReadonly14850<T[P]>;
};

type UnionToIntersection14850<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14850<T> = UnionToIntersection14850<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14850<T extends unknown[], V> = [...T, V];

type TuplifyUnion14850<T, L = LastOf14850<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14850<TuplifyUnion14850<Exclude<T, L>>, L>;

type DeepPartial14850<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14850<T[P]> }
  : T;

type Paths14850<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14850<K, Paths14850<T[K], Prev14850[D]>> : never }[keyof T]
  : never;

type Prev14850 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14850<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14850 {
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

type ConfigPaths14850 = Paths14850<NestedConfig14850>;

interface HeavyProps14850 {
  config: DeepPartial14850<NestedConfig14850>;
  path?: ConfigPaths14850;
}

const HeavyComponent14850 = memo(function HeavyComponent14850({ config }: HeavyProps14850) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14850) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14850 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14850: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14850.displayName = 'HeavyComponent14850';
export default HeavyComponent14850;
