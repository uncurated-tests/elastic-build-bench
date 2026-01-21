'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9<T> = T extends (infer U)[]
  ? DeepReadonlyArray9<U>
  : T extends object
  ? DeepReadonlyObject9<T>
  : T;

interface DeepReadonlyArray9<T> extends ReadonlyArray<DeepReadonly9<T>> {}

type DeepReadonlyObject9<T> = {
  readonly [P in keyof T]: DeepReadonly9<T[P]>;
};

type UnionToIntersection9<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9<T> = UnionToIntersection9<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9<T extends unknown[], V> = [...T, V];

type TuplifyUnion9<T, L = LastOf9<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9<TuplifyUnion9<Exclude<T, L>>, L>;

type DeepPartial9<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9<T[P]> }
  : T;

type Paths9<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9<K, Paths9<T[K], Prev9[D]>> : never }[keyof T]
  : never;

type Prev9 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9 {
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

type ConfigPaths9 = Paths9<NestedConfig9>;

interface HeavyProps9 {
  config: DeepPartial9<NestedConfig9>;
  path?: ConfigPaths9;
}

const HeavyComponent9 = memo(function HeavyComponent9({ config }: HeavyProps9) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9.displayName = 'HeavyComponent9';
export default HeavyComponent9;
