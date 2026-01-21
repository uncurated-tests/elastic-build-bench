'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9006<T> = T extends (infer U)[]
  ? DeepReadonlyArray9006<U>
  : T extends object
  ? DeepReadonlyObject9006<T>
  : T;

interface DeepReadonlyArray9006<T> extends ReadonlyArray<DeepReadonly9006<T>> {}

type DeepReadonlyObject9006<T> = {
  readonly [P in keyof T]: DeepReadonly9006<T[P]>;
};

type UnionToIntersection9006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9006<T> = UnionToIntersection9006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9006<T extends unknown[], V> = [...T, V];

type TuplifyUnion9006<T, L = LastOf9006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9006<TuplifyUnion9006<Exclude<T, L>>, L>;

type DeepPartial9006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9006<T[P]> }
  : T;

type Paths9006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9006<K, Paths9006<T[K], Prev9006[D]>> : never }[keyof T]
  : never;

type Prev9006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9006 {
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

type ConfigPaths9006 = Paths9006<NestedConfig9006>;

interface HeavyProps9006 {
  config: DeepPartial9006<NestedConfig9006>;
  path?: ConfigPaths9006;
}

const HeavyComponent9006 = memo(function HeavyComponent9006({ config }: HeavyProps9006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9006.displayName = 'HeavyComponent9006';
export default HeavyComponent9006;
