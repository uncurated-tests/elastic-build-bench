'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly201<T> = T extends (infer U)[]
  ? DeepReadonlyArray201<U>
  : T extends object
  ? DeepReadonlyObject201<T>
  : T;

interface DeepReadonlyArray201<T> extends ReadonlyArray<DeepReadonly201<T>> {}

type DeepReadonlyObject201<T> = {
  readonly [P in keyof T]: DeepReadonly201<T[P]>;
};

type UnionToIntersection201<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf201<T> = UnionToIntersection201<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push201<T extends unknown[], V> = [...T, V];

type TuplifyUnion201<T, L = LastOf201<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push201<TuplifyUnion201<Exclude<T, L>>, L>;

type DeepPartial201<T> = T extends object
  ? { [P in keyof T]?: DeepPartial201<T[P]> }
  : T;

type Paths201<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join201<K, Paths201<T[K], Prev201[D]>> : never }[keyof T]
  : never;

type Prev201 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join201<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig201 {
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

type ConfigPaths201 = Paths201<NestedConfig201>;

interface HeavyProps201 {
  config: DeepPartial201<NestedConfig201>;
  path?: ConfigPaths201;
}

const HeavyComponent201 = memo(function HeavyComponent201({ config }: HeavyProps201) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 201) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-201 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H201: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent201.displayName = 'HeavyComponent201';
export default HeavyComponent201;
