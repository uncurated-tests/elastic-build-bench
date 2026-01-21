'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9649<T> = T extends (infer U)[]
  ? DeepReadonlyArray9649<U>
  : T extends object
  ? DeepReadonlyObject9649<T>
  : T;

interface DeepReadonlyArray9649<T> extends ReadonlyArray<DeepReadonly9649<T>> {}

type DeepReadonlyObject9649<T> = {
  readonly [P in keyof T]: DeepReadonly9649<T[P]>;
};

type UnionToIntersection9649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9649<T> = UnionToIntersection9649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9649<T extends unknown[], V> = [...T, V];

type TuplifyUnion9649<T, L = LastOf9649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9649<TuplifyUnion9649<Exclude<T, L>>, L>;

type DeepPartial9649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9649<T[P]> }
  : T;

type Paths9649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9649<K, Paths9649<T[K], Prev9649[D]>> : never }[keyof T]
  : never;

type Prev9649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9649 {
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

type ConfigPaths9649 = Paths9649<NestedConfig9649>;

interface HeavyProps9649 {
  config: DeepPartial9649<NestedConfig9649>;
  path?: ConfigPaths9649;
}

const HeavyComponent9649 = memo(function HeavyComponent9649({ config }: HeavyProps9649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9649.displayName = 'HeavyComponent9649';
export default HeavyComponent9649;
