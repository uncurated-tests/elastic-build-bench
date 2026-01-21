'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly109<T> = T extends (infer U)[]
  ? DeepReadonlyArray109<U>
  : T extends object
  ? DeepReadonlyObject109<T>
  : T;

interface DeepReadonlyArray109<T> extends ReadonlyArray<DeepReadonly109<T>> {}

type DeepReadonlyObject109<T> = {
  readonly [P in keyof T]: DeepReadonly109<T[P]>;
};

type UnionToIntersection109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf109<T> = UnionToIntersection109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push109<T extends unknown[], V> = [...T, V];

type TuplifyUnion109<T, L = LastOf109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push109<TuplifyUnion109<Exclude<T, L>>, L>;

type DeepPartial109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial109<T[P]> }
  : T;

type Paths109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join109<K, Paths109<T[K], Prev109[D]>> : never }[keyof T]
  : never;

type Prev109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig109 {
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

type ConfigPaths109 = Paths109<NestedConfig109>;

interface HeavyProps109 {
  config: DeepPartial109<NestedConfig109>;
  path?: ConfigPaths109;
}

const HeavyComponent109 = memo(function HeavyComponent109({ config }: HeavyProps109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent109.displayName = 'HeavyComponent109';
export default HeavyComponent109;
