'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9764<T> = T extends (infer U)[]
  ? DeepReadonlyArray9764<U>
  : T extends object
  ? DeepReadonlyObject9764<T>
  : T;

interface DeepReadonlyArray9764<T> extends ReadonlyArray<DeepReadonly9764<T>> {}

type DeepReadonlyObject9764<T> = {
  readonly [P in keyof T]: DeepReadonly9764<T[P]>;
};

type UnionToIntersection9764<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9764<T> = UnionToIntersection9764<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9764<T extends unknown[], V> = [...T, V];

type TuplifyUnion9764<T, L = LastOf9764<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9764<TuplifyUnion9764<Exclude<T, L>>, L>;

type DeepPartial9764<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9764<T[P]> }
  : T;

type Paths9764<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9764<K, Paths9764<T[K], Prev9764[D]>> : never }[keyof T]
  : never;

type Prev9764 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9764<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9764 {
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

type ConfigPaths9764 = Paths9764<NestedConfig9764>;

interface HeavyProps9764 {
  config: DeepPartial9764<NestedConfig9764>;
  path?: ConfigPaths9764;
}

const HeavyComponent9764 = memo(function HeavyComponent9764({ config }: HeavyProps9764) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9764) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9764 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9764: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9764.displayName = 'HeavyComponent9764';
export default HeavyComponent9764;
