'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9303<T> = T extends (infer U)[]
  ? DeepReadonlyArray9303<U>
  : T extends object
  ? DeepReadonlyObject9303<T>
  : T;

interface DeepReadonlyArray9303<T> extends ReadonlyArray<DeepReadonly9303<T>> {}

type DeepReadonlyObject9303<T> = {
  readonly [P in keyof T]: DeepReadonly9303<T[P]>;
};

type UnionToIntersection9303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9303<T> = UnionToIntersection9303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9303<T extends unknown[], V> = [...T, V];

type TuplifyUnion9303<T, L = LastOf9303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9303<TuplifyUnion9303<Exclude<T, L>>, L>;

type DeepPartial9303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9303<T[P]> }
  : T;

type Paths9303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9303<K, Paths9303<T[K], Prev9303[D]>> : never }[keyof T]
  : never;

type Prev9303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9303 {
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

type ConfigPaths9303 = Paths9303<NestedConfig9303>;

interface HeavyProps9303 {
  config: DeepPartial9303<NestedConfig9303>;
  path?: ConfigPaths9303;
}

const HeavyComponent9303 = memo(function HeavyComponent9303({ config }: HeavyProps9303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9303.displayName = 'HeavyComponent9303';
export default HeavyComponent9303;
