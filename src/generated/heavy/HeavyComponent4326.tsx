'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4326<T> = T extends (infer U)[]
  ? DeepReadonlyArray4326<U>
  : T extends object
  ? DeepReadonlyObject4326<T>
  : T;

interface DeepReadonlyArray4326<T> extends ReadonlyArray<DeepReadonly4326<T>> {}

type DeepReadonlyObject4326<T> = {
  readonly [P in keyof T]: DeepReadonly4326<T[P]>;
};

type UnionToIntersection4326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4326<T> = UnionToIntersection4326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4326<T extends unknown[], V> = [...T, V];

type TuplifyUnion4326<T, L = LastOf4326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4326<TuplifyUnion4326<Exclude<T, L>>, L>;

type DeepPartial4326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4326<T[P]> }
  : T;

type Paths4326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4326<K, Paths4326<T[K], Prev4326[D]>> : never }[keyof T]
  : never;

type Prev4326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4326 {
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

type ConfigPaths4326 = Paths4326<NestedConfig4326>;

interface HeavyProps4326 {
  config: DeepPartial4326<NestedConfig4326>;
  path?: ConfigPaths4326;
}

const HeavyComponent4326 = memo(function HeavyComponent4326({ config }: HeavyProps4326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4326.displayName = 'HeavyComponent4326';
export default HeavyComponent4326;
