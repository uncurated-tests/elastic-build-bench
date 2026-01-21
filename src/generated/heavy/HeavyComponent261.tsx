'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly261<T> = T extends (infer U)[]
  ? DeepReadonlyArray261<U>
  : T extends object
  ? DeepReadonlyObject261<T>
  : T;

interface DeepReadonlyArray261<T> extends ReadonlyArray<DeepReadonly261<T>> {}

type DeepReadonlyObject261<T> = {
  readonly [P in keyof T]: DeepReadonly261<T[P]>;
};

type UnionToIntersection261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf261<T> = UnionToIntersection261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push261<T extends unknown[], V> = [...T, V];

type TuplifyUnion261<T, L = LastOf261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push261<TuplifyUnion261<Exclude<T, L>>, L>;

type DeepPartial261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial261<T[P]> }
  : T;

type Paths261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join261<K, Paths261<T[K], Prev261[D]>> : never }[keyof T]
  : never;

type Prev261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig261 {
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

type ConfigPaths261 = Paths261<NestedConfig261>;

interface HeavyProps261 {
  config: DeepPartial261<NestedConfig261>;
  path?: ConfigPaths261;
}

const HeavyComponent261 = memo(function HeavyComponent261({ config }: HeavyProps261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent261.displayName = 'HeavyComponent261';
export default HeavyComponent261;
