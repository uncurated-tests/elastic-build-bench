'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4964<T> = T extends (infer U)[]
  ? DeepReadonlyArray4964<U>
  : T extends object
  ? DeepReadonlyObject4964<T>
  : T;

interface DeepReadonlyArray4964<T> extends ReadonlyArray<DeepReadonly4964<T>> {}

type DeepReadonlyObject4964<T> = {
  readonly [P in keyof T]: DeepReadonly4964<T[P]>;
};

type UnionToIntersection4964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4964<T> = UnionToIntersection4964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4964<T extends unknown[], V> = [...T, V];

type TuplifyUnion4964<T, L = LastOf4964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4964<TuplifyUnion4964<Exclude<T, L>>, L>;

type DeepPartial4964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4964<T[P]> }
  : T;

type Paths4964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4964<K, Paths4964<T[K], Prev4964[D]>> : never }[keyof T]
  : never;

type Prev4964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4964 {
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

type ConfigPaths4964 = Paths4964<NestedConfig4964>;

interface HeavyProps4964 {
  config: DeepPartial4964<NestedConfig4964>;
  path?: ConfigPaths4964;
}

const HeavyComponent4964 = memo(function HeavyComponent4964({ config }: HeavyProps4964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4964.displayName = 'HeavyComponent4964';
export default HeavyComponent4964;
