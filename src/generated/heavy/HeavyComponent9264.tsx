'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9264<T> = T extends (infer U)[]
  ? DeepReadonlyArray9264<U>
  : T extends object
  ? DeepReadonlyObject9264<T>
  : T;

interface DeepReadonlyArray9264<T> extends ReadonlyArray<DeepReadonly9264<T>> {}

type DeepReadonlyObject9264<T> = {
  readonly [P in keyof T]: DeepReadonly9264<T[P]>;
};

type UnionToIntersection9264<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9264<T> = UnionToIntersection9264<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9264<T extends unknown[], V> = [...T, V];

type TuplifyUnion9264<T, L = LastOf9264<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9264<TuplifyUnion9264<Exclude<T, L>>, L>;

type DeepPartial9264<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9264<T[P]> }
  : T;

type Paths9264<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9264<K, Paths9264<T[K], Prev9264[D]>> : never }[keyof T]
  : never;

type Prev9264 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9264<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9264 {
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

type ConfigPaths9264 = Paths9264<NestedConfig9264>;

interface HeavyProps9264 {
  config: DeepPartial9264<NestedConfig9264>;
  path?: ConfigPaths9264;
}

const HeavyComponent9264 = memo(function HeavyComponent9264({ config }: HeavyProps9264) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9264) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9264 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9264: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9264.displayName = 'HeavyComponent9264';
export default HeavyComponent9264;
