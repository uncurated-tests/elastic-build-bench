'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9274<T> = T extends (infer U)[]
  ? DeepReadonlyArray9274<U>
  : T extends object
  ? DeepReadonlyObject9274<T>
  : T;

interface DeepReadonlyArray9274<T> extends ReadonlyArray<DeepReadonly9274<T>> {}

type DeepReadonlyObject9274<T> = {
  readonly [P in keyof T]: DeepReadonly9274<T[P]>;
};

type UnionToIntersection9274<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9274<T> = UnionToIntersection9274<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9274<T extends unknown[], V> = [...T, V];

type TuplifyUnion9274<T, L = LastOf9274<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9274<TuplifyUnion9274<Exclude<T, L>>, L>;

type DeepPartial9274<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9274<T[P]> }
  : T;

type Paths9274<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9274<K, Paths9274<T[K], Prev9274[D]>> : never }[keyof T]
  : never;

type Prev9274 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9274<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9274 {
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

type ConfigPaths9274 = Paths9274<NestedConfig9274>;

interface HeavyProps9274 {
  config: DeepPartial9274<NestedConfig9274>;
  path?: ConfigPaths9274;
}

const HeavyComponent9274 = memo(function HeavyComponent9274({ config }: HeavyProps9274) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9274) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9274 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9274: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9274.displayName = 'HeavyComponent9274';
export default HeavyComponent9274;
