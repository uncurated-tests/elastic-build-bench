'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9958<T> = T extends (infer U)[]
  ? DeepReadonlyArray9958<U>
  : T extends object
  ? DeepReadonlyObject9958<T>
  : T;

interface DeepReadonlyArray9958<T> extends ReadonlyArray<DeepReadonly9958<T>> {}

type DeepReadonlyObject9958<T> = {
  readonly [P in keyof T]: DeepReadonly9958<T[P]>;
};

type UnionToIntersection9958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9958<T> = UnionToIntersection9958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9958<T extends unknown[], V> = [...T, V];

type TuplifyUnion9958<T, L = LastOf9958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9958<TuplifyUnion9958<Exclude<T, L>>, L>;

type DeepPartial9958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9958<T[P]> }
  : T;

type Paths9958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9958<K, Paths9958<T[K], Prev9958[D]>> : never }[keyof T]
  : never;

type Prev9958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9958 {
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

type ConfigPaths9958 = Paths9958<NestedConfig9958>;

interface HeavyProps9958 {
  config: DeepPartial9958<NestedConfig9958>;
  path?: ConfigPaths9958;
}

const HeavyComponent9958 = memo(function HeavyComponent9958({ config }: HeavyProps9958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9958.displayName = 'HeavyComponent9958';
export default HeavyComponent9958;
