'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9604<T> = T extends (infer U)[]
  ? DeepReadonlyArray9604<U>
  : T extends object
  ? DeepReadonlyObject9604<T>
  : T;

interface DeepReadonlyArray9604<T> extends ReadonlyArray<DeepReadonly9604<T>> {}

type DeepReadonlyObject9604<T> = {
  readonly [P in keyof T]: DeepReadonly9604<T[P]>;
};

type UnionToIntersection9604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9604<T> = UnionToIntersection9604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9604<T extends unknown[], V> = [...T, V];

type TuplifyUnion9604<T, L = LastOf9604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9604<TuplifyUnion9604<Exclude<T, L>>, L>;

type DeepPartial9604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9604<T[P]> }
  : T;

type Paths9604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9604<K, Paths9604<T[K], Prev9604[D]>> : never }[keyof T]
  : never;

type Prev9604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9604 {
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

type ConfigPaths9604 = Paths9604<NestedConfig9604>;

interface HeavyProps9604 {
  config: DeepPartial9604<NestedConfig9604>;
  path?: ConfigPaths9604;
}

const HeavyComponent9604 = memo(function HeavyComponent9604({ config }: HeavyProps9604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9604.displayName = 'HeavyComponent9604';
export default HeavyComponent9604;
