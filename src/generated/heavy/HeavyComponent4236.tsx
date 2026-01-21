'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4236<T> = T extends (infer U)[]
  ? DeepReadonlyArray4236<U>
  : T extends object
  ? DeepReadonlyObject4236<T>
  : T;

interface DeepReadonlyArray4236<T> extends ReadonlyArray<DeepReadonly4236<T>> {}

type DeepReadonlyObject4236<T> = {
  readonly [P in keyof T]: DeepReadonly4236<T[P]>;
};

type UnionToIntersection4236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4236<T> = UnionToIntersection4236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4236<T extends unknown[], V> = [...T, V];

type TuplifyUnion4236<T, L = LastOf4236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4236<TuplifyUnion4236<Exclude<T, L>>, L>;

type DeepPartial4236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4236<T[P]> }
  : T;

type Paths4236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4236<K, Paths4236<T[K], Prev4236[D]>> : never }[keyof T]
  : never;

type Prev4236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4236 {
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

type ConfigPaths4236 = Paths4236<NestedConfig4236>;

interface HeavyProps4236 {
  config: DeepPartial4236<NestedConfig4236>;
  path?: ConfigPaths4236;
}

const HeavyComponent4236 = memo(function HeavyComponent4236({ config }: HeavyProps4236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4236.displayName = 'HeavyComponent4236';
export default HeavyComponent4236;
