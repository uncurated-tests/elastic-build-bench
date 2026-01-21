'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly247<T> = T extends (infer U)[]
  ? DeepReadonlyArray247<U>
  : T extends object
  ? DeepReadonlyObject247<T>
  : T;

interface DeepReadonlyArray247<T> extends ReadonlyArray<DeepReadonly247<T>> {}

type DeepReadonlyObject247<T> = {
  readonly [P in keyof T]: DeepReadonly247<T[P]>;
};

type UnionToIntersection247<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf247<T> = UnionToIntersection247<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push247<T extends unknown[], V> = [...T, V];

type TuplifyUnion247<T, L = LastOf247<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push247<TuplifyUnion247<Exclude<T, L>>, L>;

type DeepPartial247<T> = T extends object
  ? { [P in keyof T]?: DeepPartial247<T[P]> }
  : T;

type Paths247<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join247<K, Paths247<T[K], Prev247[D]>> : never }[keyof T]
  : never;

type Prev247 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join247<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig247 {
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

type ConfigPaths247 = Paths247<NestedConfig247>;

interface HeavyProps247 {
  config: DeepPartial247<NestedConfig247>;
  path?: ConfigPaths247;
}

const HeavyComponent247 = memo(function HeavyComponent247({ config }: HeavyProps247) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 247) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-247 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H247: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent247.displayName = 'HeavyComponent247';
export default HeavyComponent247;
