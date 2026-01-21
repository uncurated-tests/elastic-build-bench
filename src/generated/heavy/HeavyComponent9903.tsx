'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9903<T> = T extends (infer U)[]
  ? DeepReadonlyArray9903<U>
  : T extends object
  ? DeepReadonlyObject9903<T>
  : T;

interface DeepReadonlyArray9903<T> extends ReadonlyArray<DeepReadonly9903<T>> {}

type DeepReadonlyObject9903<T> = {
  readonly [P in keyof T]: DeepReadonly9903<T[P]>;
};

type UnionToIntersection9903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9903<T> = UnionToIntersection9903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9903<T extends unknown[], V> = [...T, V];

type TuplifyUnion9903<T, L = LastOf9903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9903<TuplifyUnion9903<Exclude<T, L>>, L>;

type DeepPartial9903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9903<T[P]> }
  : T;

type Paths9903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9903<K, Paths9903<T[K], Prev9903[D]>> : never }[keyof T]
  : never;

type Prev9903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9903 {
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

type ConfigPaths9903 = Paths9903<NestedConfig9903>;

interface HeavyProps9903 {
  config: DeepPartial9903<NestedConfig9903>;
  path?: ConfigPaths9903;
}

const HeavyComponent9903 = memo(function HeavyComponent9903({ config }: HeavyProps9903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9903.displayName = 'HeavyComponent9903';
export default HeavyComponent9903;
