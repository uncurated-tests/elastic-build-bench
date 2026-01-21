'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9415<T> = T extends (infer U)[]
  ? DeepReadonlyArray9415<U>
  : T extends object
  ? DeepReadonlyObject9415<T>
  : T;

interface DeepReadonlyArray9415<T> extends ReadonlyArray<DeepReadonly9415<T>> {}

type DeepReadonlyObject9415<T> = {
  readonly [P in keyof T]: DeepReadonly9415<T[P]>;
};

type UnionToIntersection9415<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9415<T> = UnionToIntersection9415<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9415<T extends unknown[], V> = [...T, V];

type TuplifyUnion9415<T, L = LastOf9415<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9415<TuplifyUnion9415<Exclude<T, L>>, L>;

type DeepPartial9415<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9415<T[P]> }
  : T;

type Paths9415<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9415<K, Paths9415<T[K], Prev9415[D]>> : never }[keyof T]
  : never;

type Prev9415 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9415<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9415 {
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

type ConfigPaths9415 = Paths9415<NestedConfig9415>;

interface HeavyProps9415 {
  config: DeepPartial9415<NestedConfig9415>;
  path?: ConfigPaths9415;
}

const HeavyComponent9415 = memo(function HeavyComponent9415({ config }: HeavyProps9415) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9415) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9415 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9415: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9415.displayName = 'HeavyComponent9415';
export default HeavyComponent9415;
