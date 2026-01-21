'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9096<T> = T extends (infer U)[]
  ? DeepReadonlyArray9096<U>
  : T extends object
  ? DeepReadonlyObject9096<T>
  : T;

interface DeepReadonlyArray9096<T> extends ReadonlyArray<DeepReadonly9096<T>> {}

type DeepReadonlyObject9096<T> = {
  readonly [P in keyof T]: DeepReadonly9096<T[P]>;
};

type UnionToIntersection9096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9096<T> = UnionToIntersection9096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9096<T extends unknown[], V> = [...T, V];

type TuplifyUnion9096<T, L = LastOf9096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9096<TuplifyUnion9096<Exclude<T, L>>, L>;

type DeepPartial9096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9096<T[P]> }
  : T;

type Paths9096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9096<K, Paths9096<T[K], Prev9096[D]>> : never }[keyof T]
  : never;

type Prev9096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9096 {
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

type ConfigPaths9096 = Paths9096<NestedConfig9096>;

interface HeavyProps9096 {
  config: DeepPartial9096<NestedConfig9096>;
  path?: ConfigPaths9096;
}

const HeavyComponent9096 = memo(function HeavyComponent9096({ config }: HeavyProps9096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9096.displayName = 'HeavyComponent9096';
export default HeavyComponent9096;
