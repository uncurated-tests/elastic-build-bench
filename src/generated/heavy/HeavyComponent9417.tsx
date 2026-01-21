'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9417<T> = T extends (infer U)[]
  ? DeepReadonlyArray9417<U>
  : T extends object
  ? DeepReadonlyObject9417<T>
  : T;

interface DeepReadonlyArray9417<T> extends ReadonlyArray<DeepReadonly9417<T>> {}

type DeepReadonlyObject9417<T> = {
  readonly [P in keyof T]: DeepReadonly9417<T[P]>;
};

type UnionToIntersection9417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9417<T> = UnionToIntersection9417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9417<T extends unknown[], V> = [...T, V];

type TuplifyUnion9417<T, L = LastOf9417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9417<TuplifyUnion9417<Exclude<T, L>>, L>;

type DeepPartial9417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9417<T[P]> }
  : T;

type Paths9417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9417<K, Paths9417<T[K], Prev9417[D]>> : never }[keyof T]
  : never;

type Prev9417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9417 {
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

type ConfigPaths9417 = Paths9417<NestedConfig9417>;

interface HeavyProps9417 {
  config: DeepPartial9417<NestedConfig9417>;
  path?: ConfigPaths9417;
}

const HeavyComponent9417 = memo(function HeavyComponent9417({ config }: HeavyProps9417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9417.displayName = 'HeavyComponent9417';
export default HeavyComponent9417;
