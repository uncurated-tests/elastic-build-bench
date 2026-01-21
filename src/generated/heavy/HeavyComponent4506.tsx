'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4506<T> = T extends (infer U)[]
  ? DeepReadonlyArray4506<U>
  : T extends object
  ? DeepReadonlyObject4506<T>
  : T;

interface DeepReadonlyArray4506<T> extends ReadonlyArray<DeepReadonly4506<T>> {}

type DeepReadonlyObject4506<T> = {
  readonly [P in keyof T]: DeepReadonly4506<T[P]>;
};

type UnionToIntersection4506<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4506<T> = UnionToIntersection4506<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4506<T extends unknown[], V> = [...T, V];

type TuplifyUnion4506<T, L = LastOf4506<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4506<TuplifyUnion4506<Exclude<T, L>>, L>;

type DeepPartial4506<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4506<T[P]> }
  : T;

type Paths4506<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4506<K, Paths4506<T[K], Prev4506[D]>> : never }[keyof T]
  : never;

type Prev4506 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4506<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4506 {
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

type ConfigPaths4506 = Paths4506<NestedConfig4506>;

interface HeavyProps4506 {
  config: DeepPartial4506<NestedConfig4506>;
  path?: ConfigPaths4506;
}

const HeavyComponent4506 = memo(function HeavyComponent4506({ config }: HeavyProps4506) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4506) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4506 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4506: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4506.displayName = 'HeavyComponent4506';
export default HeavyComponent4506;
