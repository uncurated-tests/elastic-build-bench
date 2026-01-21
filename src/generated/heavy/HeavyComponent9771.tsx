'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9771<T> = T extends (infer U)[]
  ? DeepReadonlyArray9771<U>
  : T extends object
  ? DeepReadonlyObject9771<T>
  : T;

interface DeepReadonlyArray9771<T> extends ReadonlyArray<DeepReadonly9771<T>> {}

type DeepReadonlyObject9771<T> = {
  readonly [P in keyof T]: DeepReadonly9771<T[P]>;
};

type UnionToIntersection9771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9771<T> = UnionToIntersection9771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9771<T extends unknown[], V> = [...T, V];

type TuplifyUnion9771<T, L = LastOf9771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9771<TuplifyUnion9771<Exclude<T, L>>, L>;

type DeepPartial9771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9771<T[P]> }
  : T;

type Paths9771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9771<K, Paths9771<T[K], Prev9771[D]>> : never }[keyof T]
  : never;

type Prev9771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9771 {
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

type ConfigPaths9771 = Paths9771<NestedConfig9771>;

interface HeavyProps9771 {
  config: DeepPartial9771<NestedConfig9771>;
  path?: ConfigPaths9771;
}

const HeavyComponent9771 = memo(function HeavyComponent9771({ config }: HeavyProps9771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9771.displayName = 'HeavyComponent9771';
export default HeavyComponent9771;
