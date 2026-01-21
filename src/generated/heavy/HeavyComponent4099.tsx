'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4099<T> = T extends (infer U)[]
  ? DeepReadonlyArray4099<U>
  : T extends object
  ? DeepReadonlyObject4099<T>
  : T;

interface DeepReadonlyArray4099<T> extends ReadonlyArray<DeepReadonly4099<T>> {}

type DeepReadonlyObject4099<T> = {
  readonly [P in keyof T]: DeepReadonly4099<T[P]>;
};

type UnionToIntersection4099<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4099<T> = UnionToIntersection4099<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4099<T extends unknown[], V> = [...T, V];

type TuplifyUnion4099<T, L = LastOf4099<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4099<TuplifyUnion4099<Exclude<T, L>>, L>;

type DeepPartial4099<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4099<T[P]> }
  : T;

type Paths4099<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4099<K, Paths4099<T[K], Prev4099[D]>> : never }[keyof T]
  : never;

type Prev4099 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4099<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4099 {
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

type ConfigPaths4099 = Paths4099<NestedConfig4099>;

interface HeavyProps4099 {
  config: DeepPartial4099<NestedConfig4099>;
  path?: ConfigPaths4099;
}

const HeavyComponent4099 = memo(function HeavyComponent4099({ config }: HeavyProps4099) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4099) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4099 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4099: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4099.displayName = 'HeavyComponent4099';
export default HeavyComponent4099;
