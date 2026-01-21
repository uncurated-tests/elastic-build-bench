'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9426<T> = T extends (infer U)[]
  ? DeepReadonlyArray9426<U>
  : T extends object
  ? DeepReadonlyObject9426<T>
  : T;

interface DeepReadonlyArray9426<T> extends ReadonlyArray<DeepReadonly9426<T>> {}

type DeepReadonlyObject9426<T> = {
  readonly [P in keyof T]: DeepReadonly9426<T[P]>;
};

type UnionToIntersection9426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9426<T> = UnionToIntersection9426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9426<T extends unknown[], V> = [...T, V];

type TuplifyUnion9426<T, L = LastOf9426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9426<TuplifyUnion9426<Exclude<T, L>>, L>;

type DeepPartial9426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9426<T[P]> }
  : T;

type Paths9426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9426<K, Paths9426<T[K], Prev9426[D]>> : never }[keyof T]
  : never;

type Prev9426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9426 {
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

type ConfigPaths9426 = Paths9426<NestedConfig9426>;

interface HeavyProps9426 {
  config: DeepPartial9426<NestedConfig9426>;
  path?: ConfigPaths9426;
}

const HeavyComponent9426 = memo(function HeavyComponent9426({ config }: HeavyProps9426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9426.displayName = 'HeavyComponent9426';
export default HeavyComponent9426;
