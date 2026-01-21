'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9873<T> = T extends (infer U)[]
  ? DeepReadonlyArray9873<U>
  : T extends object
  ? DeepReadonlyObject9873<T>
  : T;

interface DeepReadonlyArray9873<T> extends ReadonlyArray<DeepReadonly9873<T>> {}

type DeepReadonlyObject9873<T> = {
  readonly [P in keyof T]: DeepReadonly9873<T[P]>;
};

type UnionToIntersection9873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9873<T> = UnionToIntersection9873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9873<T extends unknown[], V> = [...T, V];

type TuplifyUnion9873<T, L = LastOf9873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9873<TuplifyUnion9873<Exclude<T, L>>, L>;

type DeepPartial9873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9873<T[P]> }
  : T;

type Paths9873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9873<K, Paths9873<T[K], Prev9873[D]>> : never }[keyof T]
  : never;

type Prev9873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9873 {
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

type ConfigPaths9873 = Paths9873<NestedConfig9873>;

interface HeavyProps9873 {
  config: DeepPartial9873<NestedConfig9873>;
  path?: ConfigPaths9873;
}

const HeavyComponent9873 = memo(function HeavyComponent9873({ config }: HeavyProps9873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9873.displayName = 'HeavyComponent9873';
export default HeavyComponent9873;
