'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9813<T> = T extends (infer U)[]
  ? DeepReadonlyArray9813<U>
  : T extends object
  ? DeepReadonlyObject9813<T>
  : T;

interface DeepReadonlyArray9813<T> extends ReadonlyArray<DeepReadonly9813<T>> {}

type DeepReadonlyObject9813<T> = {
  readonly [P in keyof T]: DeepReadonly9813<T[P]>;
};

type UnionToIntersection9813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9813<T> = UnionToIntersection9813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9813<T extends unknown[], V> = [...T, V];

type TuplifyUnion9813<T, L = LastOf9813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9813<TuplifyUnion9813<Exclude<T, L>>, L>;

type DeepPartial9813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9813<T[P]> }
  : T;

type Paths9813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9813<K, Paths9813<T[K], Prev9813[D]>> : never }[keyof T]
  : never;

type Prev9813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9813 {
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

type ConfigPaths9813 = Paths9813<NestedConfig9813>;

interface HeavyProps9813 {
  config: DeepPartial9813<NestedConfig9813>;
  path?: ConfigPaths9813;
}

const HeavyComponent9813 = memo(function HeavyComponent9813({ config }: HeavyProps9813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9813.displayName = 'HeavyComponent9813';
export default HeavyComponent9813;
