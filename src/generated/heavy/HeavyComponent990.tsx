'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly990<T> = T extends (infer U)[]
  ? DeepReadonlyArray990<U>
  : T extends object
  ? DeepReadonlyObject990<T>
  : T;

interface DeepReadonlyArray990<T> extends ReadonlyArray<DeepReadonly990<T>> {}

type DeepReadonlyObject990<T> = {
  readonly [P in keyof T]: DeepReadonly990<T[P]>;
};

type UnionToIntersection990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf990<T> = UnionToIntersection990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push990<T extends unknown[], V> = [...T, V];

type TuplifyUnion990<T, L = LastOf990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push990<TuplifyUnion990<Exclude<T, L>>, L>;

type DeepPartial990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial990<T[P]> }
  : T;

type Paths990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join990<K, Paths990<T[K], Prev990[D]>> : never }[keyof T]
  : never;

type Prev990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig990 {
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

type ConfigPaths990 = Paths990<NestedConfig990>;

interface HeavyProps990 {
  config: DeepPartial990<NestedConfig990>;
  path?: ConfigPaths990;
}

const HeavyComponent990 = memo(function HeavyComponent990({ config }: HeavyProps990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent990.displayName = 'HeavyComponent990';
export default HeavyComponent990;
