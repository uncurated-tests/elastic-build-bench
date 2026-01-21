'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9881<T> = T extends (infer U)[]
  ? DeepReadonlyArray9881<U>
  : T extends object
  ? DeepReadonlyObject9881<T>
  : T;

interface DeepReadonlyArray9881<T> extends ReadonlyArray<DeepReadonly9881<T>> {}

type DeepReadonlyObject9881<T> = {
  readonly [P in keyof T]: DeepReadonly9881<T[P]>;
};

type UnionToIntersection9881<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9881<T> = UnionToIntersection9881<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9881<T extends unknown[], V> = [...T, V];

type TuplifyUnion9881<T, L = LastOf9881<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9881<TuplifyUnion9881<Exclude<T, L>>, L>;

type DeepPartial9881<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9881<T[P]> }
  : T;

type Paths9881<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9881<K, Paths9881<T[K], Prev9881[D]>> : never }[keyof T]
  : never;

type Prev9881 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9881<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9881 {
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

type ConfigPaths9881 = Paths9881<NestedConfig9881>;

interface HeavyProps9881 {
  config: DeepPartial9881<NestedConfig9881>;
  path?: ConfigPaths9881;
}

const HeavyComponent9881 = memo(function HeavyComponent9881({ config }: HeavyProps9881) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9881) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9881 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9881: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9881.displayName = 'HeavyComponent9881';
export default HeavyComponent9881;
