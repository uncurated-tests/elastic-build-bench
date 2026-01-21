'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9015<T> = T extends (infer U)[]
  ? DeepReadonlyArray9015<U>
  : T extends object
  ? DeepReadonlyObject9015<T>
  : T;

interface DeepReadonlyArray9015<T> extends ReadonlyArray<DeepReadonly9015<T>> {}

type DeepReadonlyObject9015<T> = {
  readonly [P in keyof T]: DeepReadonly9015<T[P]>;
};

type UnionToIntersection9015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9015<T> = UnionToIntersection9015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9015<T extends unknown[], V> = [...T, V];

type TuplifyUnion9015<T, L = LastOf9015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9015<TuplifyUnion9015<Exclude<T, L>>, L>;

type DeepPartial9015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9015<T[P]> }
  : T;

type Paths9015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9015<K, Paths9015<T[K], Prev9015[D]>> : never }[keyof T]
  : never;

type Prev9015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9015 {
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

type ConfigPaths9015 = Paths9015<NestedConfig9015>;

interface HeavyProps9015 {
  config: DeepPartial9015<NestedConfig9015>;
  path?: ConfigPaths9015;
}

const HeavyComponent9015 = memo(function HeavyComponent9015({ config }: HeavyProps9015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9015.displayName = 'HeavyComponent9015';
export default HeavyComponent9015;
