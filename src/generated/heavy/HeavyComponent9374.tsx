'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9374<T> = T extends (infer U)[]
  ? DeepReadonlyArray9374<U>
  : T extends object
  ? DeepReadonlyObject9374<T>
  : T;

interface DeepReadonlyArray9374<T> extends ReadonlyArray<DeepReadonly9374<T>> {}

type DeepReadonlyObject9374<T> = {
  readonly [P in keyof T]: DeepReadonly9374<T[P]>;
};

type UnionToIntersection9374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9374<T> = UnionToIntersection9374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9374<T extends unknown[], V> = [...T, V];

type TuplifyUnion9374<T, L = LastOf9374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9374<TuplifyUnion9374<Exclude<T, L>>, L>;

type DeepPartial9374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9374<T[P]> }
  : T;

type Paths9374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9374<K, Paths9374<T[K], Prev9374[D]>> : never }[keyof T]
  : never;

type Prev9374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9374 {
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

type ConfigPaths9374 = Paths9374<NestedConfig9374>;

interface HeavyProps9374 {
  config: DeepPartial9374<NestedConfig9374>;
  path?: ConfigPaths9374;
}

const HeavyComponent9374 = memo(function HeavyComponent9374({ config }: HeavyProps9374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9374.displayName = 'HeavyComponent9374';
export default HeavyComponent9374;
