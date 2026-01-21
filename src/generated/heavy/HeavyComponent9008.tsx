'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9008<T> = T extends (infer U)[]
  ? DeepReadonlyArray9008<U>
  : T extends object
  ? DeepReadonlyObject9008<T>
  : T;

interface DeepReadonlyArray9008<T> extends ReadonlyArray<DeepReadonly9008<T>> {}

type DeepReadonlyObject9008<T> = {
  readonly [P in keyof T]: DeepReadonly9008<T[P]>;
};

type UnionToIntersection9008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9008<T> = UnionToIntersection9008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9008<T extends unknown[], V> = [...T, V];

type TuplifyUnion9008<T, L = LastOf9008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9008<TuplifyUnion9008<Exclude<T, L>>, L>;

type DeepPartial9008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9008<T[P]> }
  : T;

type Paths9008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9008<K, Paths9008<T[K], Prev9008[D]>> : never }[keyof T]
  : never;

type Prev9008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9008 {
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

type ConfigPaths9008 = Paths9008<NestedConfig9008>;

interface HeavyProps9008 {
  config: DeepPartial9008<NestedConfig9008>;
  path?: ConfigPaths9008;
}

const HeavyComponent9008 = memo(function HeavyComponent9008({ config }: HeavyProps9008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9008.displayName = 'HeavyComponent9008';
export default HeavyComponent9008;
