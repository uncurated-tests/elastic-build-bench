'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly186<T> = T extends (infer U)[]
  ? DeepReadonlyArray186<U>
  : T extends object
  ? DeepReadonlyObject186<T>
  : T;

interface DeepReadonlyArray186<T> extends ReadonlyArray<DeepReadonly186<T>> {}

type DeepReadonlyObject186<T> = {
  readonly [P in keyof T]: DeepReadonly186<T[P]>;
};

type UnionToIntersection186<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf186<T> = UnionToIntersection186<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push186<T extends unknown[], V> = [...T, V];

type TuplifyUnion186<T, L = LastOf186<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push186<TuplifyUnion186<Exclude<T, L>>, L>;

type DeepPartial186<T> = T extends object
  ? { [P in keyof T]?: DeepPartial186<T[P]> }
  : T;

type Paths186<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join186<K, Paths186<T[K], Prev186[D]>> : never }[keyof T]
  : never;

type Prev186 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join186<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig186 {
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

type ConfigPaths186 = Paths186<NestedConfig186>;

interface HeavyProps186 {
  config: DeepPartial186<NestedConfig186>;
  path?: ConfigPaths186;
}

const HeavyComponent186 = memo(function HeavyComponent186({ config }: HeavyProps186) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 186) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-186 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H186: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent186.displayName = 'HeavyComponent186';
export default HeavyComponent186;
