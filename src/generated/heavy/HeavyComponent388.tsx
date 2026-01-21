'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly388<T> = T extends (infer U)[]
  ? DeepReadonlyArray388<U>
  : T extends object
  ? DeepReadonlyObject388<T>
  : T;

interface DeepReadonlyArray388<T> extends ReadonlyArray<DeepReadonly388<T>> {}

type DeepReadonlyObject388<T> = {
  readonly [P in keyof T]: DeepReadonly388<T[P]>;
};

type UnionToIntersection388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf388<T> = UnionToIntersection388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push388<T extends unknown[], V> = [...T, V];

type TuplifyUnion388<T, L = LastOf388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push388<TuplifyUnion388<Exclude<T, L>>, L>;

type DeepPartial388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial388<T[P]> }
  : T;

type Paths388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join388<K, Paths388<T[K], Prev388[D]>> : never }[keyof T]
  : never;

type Prev388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig388 {
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

type ConfigPaths388 = Paths388<NestedConfig388>;

interface HeavyProps388 {
  config: DeepPartial388<NestedConfig388>;
  path?: ConfigPaths388;
}

const HeavyComponent388 = memo(function HeavyComponent388({ config }: HeavyProps388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent388.displayName = 'HeavyComponent388';
export default HeavyComponent388;
