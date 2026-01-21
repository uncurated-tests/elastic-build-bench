'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9954<T> = T extends (infer U)[]
  ? DeepReadonlyArray9954<U>
  : T extends object
  ? DeepReadonlyObject9954<T>
  : T;

interface DeepReadonlyArray9954<T> extends ReadonlyArray<DeepReadonly9954<T>> {}

type DeepReadonlyObject9954<T> = {
  readonly [P in keyof T]: DeepReadonly9954<T[P]>;
};

type UnionToIntersection9954<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9954<T> = UnionToIntersection9954<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9954<T extends unknown[], V> = [...T, V];

type TuplifyUnion9954<T, L = LastOf9954<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9954<TuplifyUnion9954<Exclude<T, L>>, L>;

type DeepPartial9954<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9954<T[P]> }
  : T;

type Paths9954<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9954<K, Paths9954<T[K], Prev9954[D]>> : never }[keyof T]
  : never;

type Prev9954 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9954<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9954 {
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

type ConfigPaths9954 = Paths9954<NestedConfig9954>;

interface HeavyProps9954 {
  config: DeepPartial9954<NestedConfig9954>;
  path?: ConfigPaths9954;
}

const HeavyComponent9954 = memo(function HeavyComponent9954({ config }: HeavyProps9954) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9954) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9954 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9954: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9954.displayName = 'HeavyComponent9954';
export default HeavyComponent9954;
