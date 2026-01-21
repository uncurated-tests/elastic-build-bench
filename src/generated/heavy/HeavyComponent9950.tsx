'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9950<T> = T extends (infer U)[]
  ? DeepReadonlyArray9950<U>
  : T extends object
  ? DeepReadonlyObject9950<T>
  : T;

interface DeepReadonlyArray9950<T> extends ReadonlyArray<DeepReadonly9950<T>> {}

type DeepReadonlyObject9950<T> = {
  readonly [P in keyof T]: DeepReadonly9950<T[P]>;
};

type UnionToIntersection9950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9950<T> = UnionToIntersection9950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9950<T extends unknown[], V> = [...T, V];

type TuplifyUnion9950<T, L = LastOf9950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9950<TuplifyUnion9950<Exclude<T, L>>, L>;

type DeepPartial9950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9950<T[P]> }
  : T;

type Paths9950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9950<K, Paths9950<T[K], Prev9950[D]>> : never }[keyof T]
  : never;

type Prev9950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9950 {
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

type ConfigPaths9950 = Paths9950<NestedConfig9950>;

interface HeavyProps9950 {
  config: DeepPartial9950<NestedConfig9950>;
  path?: ConfigPaths9950;
}

const HeavyComponent9950 = memo(function HeavyComponent9950({ config }: HeavyProps9950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9950.displayName = 'HeavyComponent9950';
export default HeavyComponent9950;
