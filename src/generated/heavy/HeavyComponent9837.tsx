'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9837<T> = T extends (infer U)[]
  ? DeepReadonlyArray9837<U>
  : T extends object
  ? DeepReadonlyObject9837<T>
  : T;

interface DeepReadonlyArray9837<T> extends ReadonlyArray<DeepReadonly9837<T>> {}

type DeepReadonlyObject9837<T> = {
  readonly [P in keyof T]: DeepReadonly9837<T[P]>;
};

type UnionToIntersection9837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9837<T> = UnionToIntersection9837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9837<T extends unknown[], V> = [...T, V];

type TuplifyUnion9837<T, L = LastOf9837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9837<TuplifyUnion9837<Exclude<T, L>>, L>;

type DeepPartial9837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9837<T[P]> }
  : T;

type Paths9837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9837<K, Paths9837<T[K], Prev9837[D]>> : never }[keyof T]
  : never;

type Prev9837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9837 {
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

type ConfigPaths9837 = Paths9837<NestedConfig9837>;

interface HeavyProps9837 {
  config: DeepPartial9837<NestedConfig9837>;
  path?: ConfigPaths9837;
}

const HeavyComponent9837 = memo(function HeavyComponent9837({ config }: HeavyProps9837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9837.displayName = 'HeavyComponent9837';
export default HeavyComponent9837;
