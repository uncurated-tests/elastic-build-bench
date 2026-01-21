'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4900<T> = T extends (infer U)[]
  ? DeepReadonlyArray4900<U>
  : T extends object
  ? DeepReadonlyObject4900<T>
  : T;

interface DeepReadonlyArray4900<T> extends ReadonlyArray<DeepReadonly4900<T>> {}

type DeepReadonlyObject4900<T> = {
  readonly [P in keyof T]: DeepReadonly4900<T[P]>;
};

type UnionToIntersection4900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4900<T> = UnionToIntersection4900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4900<T extends unknown[], V> = [...T, V];

type TuplifyUnion4900<T, L = LastOf4900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4900<TuplifyUnion4900<Exclude<T, L>>, L>;

type DeepPartial4900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4900<T[P]> }
  : T;

type Paths4900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4900<K, Paths4900<T[K], Prev4900[D]>> : never }[keyof T]
  : never;

type Prev4900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4900 {
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

type ConfigPaths4900 = Paths4900<NestedConfig4900>;

interface HeavyProps4900 {
  config: DeepPartial4900<NestedConfig4900>;
  path?: ConfigPaths4900;
}

const HeavyComponent4900 = memo(function HeavyComponent4900({ config }: HeavyProps4900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4900.displayName = 'HeavyComponent4900';
export default HeavyComponent4900;
