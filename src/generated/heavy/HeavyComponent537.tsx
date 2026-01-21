'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly537<T> = T extends (infer U)[]
  ? DeepReadonlyArray537<U>
  : T extends object
  ? DeepReadonlyObject537<T>
  : T;

interface DeepReadonlyArray537<T> extends ReadonlyArray<DeepReadonly537<T>> {}

type DeepReadonlyObject537<T> = {
  readonly [P in keyof T]: DeepReadonly537<T[P]>;
};

type UnionToIntersection537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf537<T> = UnionToIntersection537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push537<T extends unknown[], V> = [...T, V];

type TuplifyUnion537<T, L = LastOf537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push537<TuplifyUnion537<Exclude<T, L>>, L>;

type DeepPartial537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial537<T[P]> }
  : T;

type Paths537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join537<K, Paths537<T[K], Prev537[D]>> : never }[keyof T]
  : never;

type Prev537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig537 {
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

type ConfigPaths537 = Paths537<NestedConfig537>;

interface HeavyProps537 {
  config: DeepPartial537<NestedConfig537>;
  path?: ConfigPaths537;
}

const HeavyComponent537 = memo(function HeavyComponent537({ config }: HeavyProps537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent537.displayName = 'HeavyComponent537';
export default HeavyComponent537;
