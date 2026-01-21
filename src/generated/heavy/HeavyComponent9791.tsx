'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9791<T> = T extends (infer U)[]
  ? DeepReadonlyArray9791<U>
  : T extends object
  ? DeepReadonlyObject9791<T>
  : T;

interface DeepReadonlyArray9791<T> extends ReadonlyArray<DeepReadonly9791<T>> {}

type DeepReadonlyObject9791<T> = {
  readonly [P in keyof T]: DeepReadonly9791<T[P]>;
};

type UnionToIntersection9791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9791<T> = UnionToIntersection9791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9791<T extends unknown[], V> = [...T, V];

type TuplifyUnion9791<T, L = LastOf9791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9791<TuplifyUnion9791<Exclude<T, L>>, L>;

type DeepPartial9791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9791<T[P]> }
  : T;

type Paths9791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9791<K, Paths9791<T[K], Prev9791[D]>> : never }[keyof T]
  : never;

type Prev9791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9791 {
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

type ConfigPaths9791 = Paths9791<NestedConfig9791>;

interface HeavyProps9791 {
  config: DeepPartial9791<NestedConfig9791>;
  path?: ConfigPaths9791;
}

const HeavyComponent9791 = memo(function HeavyComponent9791({ config }: HeavyProps9791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9791.displayName = 'HeavyComponent9791';
export default HeavyComponent9791;
