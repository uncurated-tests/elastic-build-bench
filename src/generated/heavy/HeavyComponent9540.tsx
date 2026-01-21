'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9540<T> = T extends (infer U)[]
  ? DeepReadonlyArray9540<U>
  : T extends object
  ? DeepReadonlyObject9540<T>
  : T;

interface DeepReadonlyArray9540<T> extends ReadonlyArray<DeepReadonly9540<T>> {}

type DeepReadonlyObject9540<T> = {
  readonly [P in keyof T]: DeepReadonly9540<T[P]>;
};

type UnionToIntersection9540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9540<T> = UnionToIntersection9540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9540<T extends unknown[], V> = [...T, V];

type TuplifyUnion9540<T, L = LastOf9540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9540<TuplifyUnion9540<Exclude<T, L>>, L>;

type DeepPartial9540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9540<T[P]> }
  : T;

type Paths9540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9540<K, Paths9540<T[K], Prev9540[D]>> : never }[keyof T]
  : never;

type Prev9540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9540 {
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

type ConfigPaths9540 = Paths9540<NestedConfig9540>;

interface HeavyProps9540 {
  config: DeepPartial9540<NestedConfig9540>;
  path?: ConfigPaths9540;
}

const HeavyComponent9540 = memo(function HeavyComponent9540({ config }: HeavyProps9540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9540.displayName = 'HeavyComponent9540';
export default HeavyComponent9540;
