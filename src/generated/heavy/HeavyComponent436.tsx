'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly436<T> = T extends (infer U)[]
  ? DeepReadonlyArray436<U>
  : T extends object
  ? DeepReadonlyObject436<T>
  : T;

interface DeepReadonlyArray436<T> extends ReadonlyArray<DeepReadonly436<T>> {}

type DeepReadonlyObject436<T> = {
  readonly [P in keyof T]: DeepReadonly436<T[P]>;
};

type UnionToIntersection436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf436<T> = UnionToIntersection436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push436<T extends unknown[], V> = [...T, V];

type TuplifyUnion436<T, L = LastOf436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push436<TuplifyUnion436<Exclude<T, L>>, L>;

type DeepPartial436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial436<T[P]> }
  : T;

type Paths436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join436<K, Paths436<T[K], Prev436[D]>> : never }[keyof T]
  : never;

type Prev436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig436 {
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

type ConfigPaths436 = Paths436<NestedConfig436>;

interface HeavyProps436 {
  config: DeepPartial436<NestedConfig436>;
  path?: ConfigPaths436;
}

const HeavyComponent436 = memo(function HeavyComponent436({ config }: HeavyProps436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent436.displayName = 'HeavyComponent436';
export default HeavyComponent436;
