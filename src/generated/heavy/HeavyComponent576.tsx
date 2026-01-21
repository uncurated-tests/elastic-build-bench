'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly576<T> = T extends (infer U)[]
  ? DeepReadonlyArray576<U>
  : T extends object
  ? DeepReadonlyObject576<T>
  : T;

interface DeepReadonlyArray576<T> extends ReadonlyArray<DeepReadonly576<T>> {}

type DeepReadonlyObject576<T> = {
  readonly [P in keyof T]: DeepReadonly576<T[P]>;
};

type UnionToIntersection576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf576<T> = UnionToIntersection576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push576<T extends unknown[], V> = [...T, V];

type TuplifyUnion576<T, L = LastOf576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push576<TuplifyUnion576<Exclude<T, L>>, L>;

type DeepPartial576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial576<T[P]> }
  : T;

type Paths576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join576<K, Paths576<T[K], Prev576[D]>> : never }[keyof T]
  : never;

type Prev576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig576 {
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

type ConfigPaths576 = Paths576<NestedConfig576>;

interface HeavyProps576 {
  config: DeepPartial576<NestedConfig576>;
  path?: ConfigPaths576;
}

const HeavyComponent576 = memo(function HeavyComponent576({ config }: HeavyProps576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent576.displayName = 'HeavyComponent576';
export default HeavyComponent576;
