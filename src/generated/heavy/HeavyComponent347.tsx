'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly347<T> = T extends (infer U)[]
  ? DeepReadonlyArray347<U>
  : T extends object
  ? DeepReadonlyObject347<T>
  : T;

interface DeepReadonlyArray347<T> extends ReadonlyArray<DeepReadonly347<T>> {}

type DeepReadonlyObject347<T> = {
  readonly [P in keyof T]: DeepReadonly347<T[P]>;
};

type UnionToIntersection347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf347<T> = UnionToIntersection347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push347<T extends unknown[], V> = [...T, V];

type TuplifyUnion347<T, L = LastOf347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push347<TuplifyUnion347<Exclude<T, L>>, L>;

type DeepPartial347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial347<T[P]> }
  : T;

type Paths347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join347<K, Paths347<T[K], Prev347[D]>> : never }[keyof T]
  : never;

type Prev347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig347 {
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

type ConfigPaths347 = Paths347<NestedConfig347>;

interface HeavyProps347 {
  config: DeepPartial347<NestedConfig347>;
  path?: ConfigPaths347;
}

const HeavyComponent347 = memo(function HeavyComponent347({ config }: HeavyProps347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent347.displayName = 'HeavyComponent347';
export default HeavyComponent347;
