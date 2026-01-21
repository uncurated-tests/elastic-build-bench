'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9497<T> = T extends (infer U)[]
  ? DeepReadonlyArray9497<U>
  : T extends object
  ? DeepReadonlyObject9497<T>
  : T;

interface DeepReadonlyArray9497<T> extends ReadonlyArray<DeepReadonly9497<T>> {}

type DeepReadonlyObject9497<T> = {
  readonly [P in keyof T]: DeepReadonly9497<T[P]>;
};

type UnionToIntersection9497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9497<T> = UnionToIntersection9497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9497<T extends unknown[], V> = [...T, V];

type TuplifyUnion9497<T, L = LastOf9497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9497<TuplifyUnion9497<Exclude<T, L>>, L>;

type DeepPartial9497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9497<T[P]> }
  : T;

type Paths9497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9497<K, Paths9497<T[K], Prev9497[D]>> : never }[keyof T]
  : never;

type Prev9497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9497 {
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

type ConfigPaths9497 = Paths9497<NestedConfig9497>;

interface HeavyProps9497 {
  config: DeepPartial9497<NestedConfig9497>;
  path?: ConfigPaths9497;
}

const HeavyComponent9497 = memo(function HeavyComponent9497({ config }: HeavyProps9497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9497.displayName = 'HeavyComponent9497';
export default HeavyComponent9497;
