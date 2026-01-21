'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9066<T> = T extends (infer U)[]
  ? DeepReadonlyArray9066<U>
  : T extends object
  ? DeepReadonlyObject9066<T>
  : T;

interface DeepReadonlyArray9066<T> extends ReadonlyArray<DeepReadonly9066<T>> {}

type DeepReadonlyObject9066<T> = {
  readonly [P in keyof T]: DeepReadonly9066<T[P]>;
};

type UnionToIntersection9066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9066<T> = UnionToIntersection9066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9066<T extends unknown[], V> = [...T, V];

type TuplifyUnion9066<T, L = LastOf9066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9066<TuplifyUnion9066<Exclude<T, L>>, L>;

type DeepPartial9066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9066<T[P]> }
  : T;

type Paths9066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9066<K, Paths9066<T[K], Prev9066[D]>> : never }[keyof T]
  : never;

type Prev9066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9066 {
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

type ConfigPaths9066 = Paths9066<NestedConfig9066>;

interface HeavyProps9066 {
  config: DeepPartial9066<NestedConfig9066>;
  path?: ConfigPaths9066;
}

const HeavyComponent9066 = memo(function HeavyComponent9066({ config }: HeavyProps9066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9066.displayName = 'HeavyComponent9066';
export default HeavyComponent9066;
