'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9745<T> = T extends (infer U)[]
  ? DeepReadonlyArray9745<U>
  : T extends object
  ? DeepReadonlyObject9745<T>
  : T;

interface DeepReadonlyArray9745<T> extends ReadonlyArray<DeepReadonly9745<T>> {}

type DeepReadonlyObject9745<T> = {
  readonly [P in keyof T]: DeepReadonly9745<T[P]>;
};

type UnionToIntersection9745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9745<T> = UnionToIntersection9745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9745<T extends unknown[], V> = [...T, V];

type TuplifyUnion9745<T, L = LastOf9745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9745<TuplifyUnion9745<Exclude<T, L>>, L>;

type DeepPartial9745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9745<T[P]> }
  : T;

type Paths9745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9745<K, Paths9745<T[K], Prev9745[D]>> : never }[keyof T]
  : never;

type Prev9745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9745 {
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

type ConfigPaths9745 = Paths9745<NestedConfig9745>;

interface HeavyProps9745 {
  config: DeepPartial9745<NestedConfig9745>;
  path?: ConfigPaths9745;
}

const HeavyComponent9745 = memo(function HeavyComponent9745({ config }: HeavyProps9745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9745.displayName = 'HeavyComponent9745';
export default HeavyComponent9745;
