'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9087<T> = T extends (infer U)[]
  ? DeepReadonlyArray9087<U>
  : T extends object
  ? DeepReadonlyObject9087<T>
  : T;

interface DeepReadonlyArray9087<T> extends ReadonlyArray<DeepReadonly9087<T>> {}

type DeepReadonlyObject9087<T> = {
  readonly [P in keyof T]: DeepReadonly9087<T[P]>;
};

type UnionToIntersection9087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9087<T> = UnionToIntersection9087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9087<T extends unknown[], V> = [...T, V];

type TuplifyUnion9087<T, L = LastOf9087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9087<TuplifyUnion9087<Exclude<T, L>>, L>;

type DeepPartial9087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9087<T[P]> }
  : T;

type Paths9087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9087<K, Paths9087<T[K], Prev9087[D]>> : never }[keyof T]
  : never;

type Prev9087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9087 {
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

type ConfigPaths9087 = Paths9087<NestedConfig9087>;

interface HeavyProps9087 {
  config: DeepPartial9087<NestedConfig9087>;
  path?: ConfigPaths9087;
}

const HeavyComponent9087 = memo(function HeavyComponent9087({ config }: HeavyProps9087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9087.displayName = 'HeavyComponent9087';
export default HeavyComponent9087;
