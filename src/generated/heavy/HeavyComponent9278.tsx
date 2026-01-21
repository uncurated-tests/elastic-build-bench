'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9278<T> = T extends (infer U)[]
  ? DeepReadonlyArray9278<U>
  : T extends object
  ? DeepReadonlyObject9278<T>
  : T;

interface DeepReadonlyArray9278<T> extends ReadonlyArray<DeepReadonly9278<T>> {}

type DeepReadonlyObject9278<T> = {
  readonly [P in keyof T]: DeepReadonly9278<T[P]>;
};

type UnionToIntersection9278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9278<T> = UnionToIntersection9278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9278<T extends unknown[], V> = [...T, V];

type TuplifyUnion9278<T, L = LastOf9278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9278<TuplifyUnion9278<Exclude<T, L>>, L>;

type DeepPartial9278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9278<T[P]> }
  : T;

type Paths9278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9278<K, Paths9278<T[K], Prev9278[D]>> : never }[keyof T]
  : never;

type Prev9278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9278 {
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

type ConfigPaths9278 = Paths9278<NestedConfig9278>;

interface HeavyProps9278 {
  config: DeepPartial9278<NestedConfig9278>;
  path?: ConfigPaths9278;
}

const HeavyComponent9278 = memo(function HeavyComponent9278({ config }: HeavyProps9278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9278.displayName = 'HeavyComponent9278';
export default HeavyComponent9278;
