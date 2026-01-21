'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9794<T> = T extends (infer U)[]
  ? DeepReadonlyArray9794<U>
  : T extends object
  ? DeepReadonlyObject9794<T>
  : T;

interface DeepReadonlyArray9794<T> extends ReadonlyArray<DeepReadonly9794<T>> {}

type DeepReadonlyObject9794<T> = {
  readonly [P in keyof T]: DeepReadonly9794<T[P]>;
};

type UnionToIntersection9794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9794<T> = UnionToIntersection9794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9794<T extends unknown[], V> = [...T, V];

type TuplifyUnion9794<T, L = LastOf9794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9794<TuplifyUnion9794<Exclude<T, L>>, L>;

type DeepPartial9794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9794<T[P]> }
  : T;

type Paths9794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9794<K, Paths9794<T[K], Prev9794[D]>> : never }[keyof T]
  : never;

type Prev9794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9794 {
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

type ConfigPaths9794 = Paths9794<NestedConfig9794>;

interface HeavyProps9794 {
  config: DeepPartial9794<NestedConfig9794>;
  path?: ConfigPaths9794;
}

const HeavyComponent9794 = memo(function HeavyComponent9794({ config }: HeavyProps9794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9794.displayName = 'HeavyComponent9794';
export default HeavyComponent9794;
