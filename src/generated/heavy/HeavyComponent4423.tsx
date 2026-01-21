'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4423<T> = T extends (infer U)[]
  ? DeepReadonlyArray4423<U>
  : T extends object
  ? DeepReadonlyObject4423<T>
  : T;

interface DeepReadonlyArray4423<T> extends ReadonlyArray<DeepReadonly4423<T>> {}

type DeepReadonlyObject4423<T> = {
  readonly [P in keyof T]: DeepReadonly4423<T[P]>;
};

type UnionToIntersection4423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4423<T> = UnionToIntersection4423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4423<T extends unknown[], V> = [...T, V];

type TuplifyUnion4423<T, L = LastOf4423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4423<TuplifyUnion4423<Exclude<T, L>>, L>;

type DeepPartial4423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4423<T[P]> }
  : T;

type Paths4423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4423<K, Paths4423<T[K], Prev4423[D]>> : never }[keyof T]
  : never;

type Prev4423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4423 {
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

type ConfigPaths4423 = Paths4423<NestedConfig4423>;

interface HeavyProps4423 {
  config: DeepPartial4423<NestedConfig4423>;
  path?: ConfigPaths4423;
}

const HeavyComponent4423 = memo(function HeavyComponent4423({ config }: HeavyProps4423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4423.displayName = 'HeavyComponent4423';
export default HeavyComponent4423;
